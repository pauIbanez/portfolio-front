interface PageInfo {
  readonly path: string;
  readonly name: string;
  readonly translationKey?: string;
  readonly isDynamic?: boolean;
  readonly projectPaths?: string[];
}

export default PageInfo;
