## Sequelize-cli 목적 

직접 사용하는 스키마를 변경하게 되면 위험하기도 하고 운영중인 서비스에서는 갱신이 안되므로, 운영중인 서비스에서 데이터베이스 변경사항을 반영하기 위해서 사용한다. 

1. 테이블 생성 파일 만들기

   Internally, `sequelize.define` calls `Model.init`

   ```javascript
   npx sequelize-cli model:generate --name reservation --attributes reserveid:integer
   ```

2. Sequelize migration 파일 돌리기

```javascript
../../node_modules/.bin/sequelize db:migrate
../../node_modules/.bin/sequelize db:migrate:undo
```

### index.js

-  생성된 테이블에 대한 모델 정보는 index.js에서 db객체에 담아서 export



### 삽질

- 비동기 처리를 해야된다.