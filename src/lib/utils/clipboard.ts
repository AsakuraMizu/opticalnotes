// Copied and modified from https://github.com/skeletonlabs/skeleton/blob/master/src/lib/actions/Clipboard/clipboard.ts
// Action: Clipboard

import { toast } from 'svoast';

export function clipboard(node: HTMLElement, args: any) {
  const onClick = () => {
    // Handle `data-clipboard` target based on object key
    if (typeof args === 'object') {
      // Element Inner HTML
      if (Object.prototype.hasOwnProperty.call(args, 'element')) {
        const element: HTMLElement | null = document.querySelector(
          `[data-clipboard="${args.element}"]`
        );
        copyToClipboard(element?.innerHTML);
        return;
      }
      // Form Input Value
      if (Object.prototype.hasOwnProperty.call(args, 'input')) {
        const input: HTMLInputElement | null = document.querySelector(
          `[data-clipboard="${args.input}"]`
        );
        copyToClipboard(input?.value);
        return;
      }
    }
    // Handle everything else.
    copyToClipboard(args);
  };
  // Event Listener
  node.addEventListener('click', onClick);
  // Lifecycle
  return {
    update(newArgs: any) {
      args = newArgs;
    },
    destroy() {
      node.removeEventListener('click', onClick);
    },
  };
}

// Shared copy method
function copyToClipboard(data: any): void {
  navigator.clipboard.writeText(String(data));
  toast.success('已复制到剪切板！');
}
