const defaultPrefixCls = "testui";
export function usePrefixCls(suffixCls: string) {
  return `${defaultPrefixCls}-${suffixCls}`;
}
