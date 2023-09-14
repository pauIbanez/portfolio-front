interface PageInfo {
  readonly path: string;
  readonly name: string;
  readonly translationKey?: string;
  readonly isDynamic?: boolean;
}

export default PageInfo;
