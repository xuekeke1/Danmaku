import { unbindEvents } from '../internal/events.js';
import pause from '../internal/pause.js';

/* eslint-disable no-invalid-this */
export default function() {
  if (!this.container) {
    return this;
  }

  pause.call(this);
  this.clear();
  if (this.media) {
    unbindEvents.call(this, this._listener);
  }
  for (var key in this) {
    /* istanbul ignore else  */
    if (Object.prototype.hasOwnProperty.call(this, key)) {
      this[key] = null;
    }
  }
  return this;
}
