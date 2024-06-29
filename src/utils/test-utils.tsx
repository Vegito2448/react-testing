import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ReactElement } from 'react';
import { AppProviders } from '../providers';

type CustomRenderOptions = Omit<RenderOptions, 'wrapper'>;

const customRender = (
  ui: ReactElement,
  options?: CustomRenderOptions,
): RenderResult => render(ui, { wrapper: AppProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
