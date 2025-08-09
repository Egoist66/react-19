import React, { type Key, type ReactNode }  from 'react';

interface MapRenderOptions<T> {
 
  component: React.ElementType;
 
  props?: Record<string, any>;

  keyGenerator?: (item: T, index: number) => Key;
 
  transform?: (item: T, index: number) => ReactNode;
}


/**
 * Maps over an array of data and renders each item as a separate React component.
 *
 * The method supports two types of syntax. The first one is a simplified syntax
 * when the options are passed as a single React component:
 *
 * 
 * 
*/
export function mapRender<T>(
  data: T[],
  options: React.ElementType | MapRenderOptions<T>
): ReactNode[] {
  // Если options - просто компонент (упрощённый синтаксис)
  if (typeof options === 'string' || typeof options === 'function') {
    return data.map((item) =>
      React.createElement(
        options,
        { key: crypto.randomUUID() },
        item as ReactNode
      )
    );
  }

  // Полный вариант с настройками
  const {
    component,
    props = {},
    keyGenerator = (_, index) => index,
    transform = (item) => item
  } = options;

  return data.map((item, index) => {
    const key = keyGenerator(item, index);
    const children = transform(item, index);

    return React.createElement(
      component,
      { ...props, key },
      children as ReactNode
    );
  });
}