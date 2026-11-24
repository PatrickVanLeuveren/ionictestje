import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

/** Shape of the data handed from the home page to the details page. */
export interface DetailsState {
  name: string;
  message: string;
  secretCode: number;
  sentAt: string;
}

/**
 * Passes data between pages via the Router's navigation state.
 * The data lives in `history.state`, so it is never part of the URL
 * (/details stays clean) and survives a page reload, but is lost if the
 * user opens /details directly in a new tab.
 */
@Injectable({ providedIn: 'root' })
export class NavStateService {
  private router = inject(Router);

  go<T extends object>(url: string, state: T) {
    return this.router.navigateByUrl(url, { state });
  }

  /** Read the state of the navigation in progress (call from a constructor/ngOnInit). */
  read<T>(): T | undefined {
    const fromNav = this.router.getCurrentNavigation()?.extras.state as T | undefined;
    if (fromNav) return fromNav;
    // Fallback for page reloads / back-forward: Angular stores state in history.state.
    const { navigationId: _id, ...rest } = (history.state ?? {}) as Record<string, unknown>;
    return Object.keys(rest).length ? (rest as T) : undefined;
  }
}
