export { index } from './index.ts';
export { p1 } from './p1.ts';
import { index } from './index.ts';
import { p1 } from './p1.ts';

declare global {
    interface Window {
        index: any;
        p1: any;
    }
}
window.index = index;
window.p1 = p1;