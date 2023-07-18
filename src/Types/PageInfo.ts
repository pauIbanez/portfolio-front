interface PageInfo {
  readonly path: string;
  readonly name: string;
  readonly translationKey?: string;
  readonly isDynamic?: boolean;
  readonly id?: string;
}

export default PageInfo;
