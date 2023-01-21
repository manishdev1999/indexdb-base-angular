import { NgModule } from '@angular/core';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';

const dbConfig: DBConfig = {
  name: 'Helix',
  version: 1,
  objectStoresMeta: [
    {
      store: 'cascadingFilters',
      storeConfig: { keyPath: 'profileCode', autoIncrement: false },
      storeSchema: [
        {
          name: 'recordCreated',
          keypath: 'recordCreated',
          options: { unique: false },
        },
        {
          name: 'recordDeletion',
          keypath: 'recordDeletion',
          options: { unique: false },
        },
        {
          name: 'retailerCode',
          keypath: 'retailerCode',
          options: { unique: false },
        },
        {
          name: 'filerResponse',
          keypath: 'filerResponse',
          options: { unique: false },
        },
      ],
    },
  ],
};

@NgModule({
  imports: [NgxIndexedDBModule.forRoot(dbConfig)],
  declarations: [],
  bootstrap: [],
})
export class IndexDBModule {}
