export interface StorageDispatcher {
  set<Value>(key: string, value: Value, options?: any): void;
  get<Value>(key: string, options?: any): Promise<Value>;
  remove(key: string, options?: any): void;
}

export default StorageDispatcher;
