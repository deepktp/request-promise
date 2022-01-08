# request-promise


As of *Feb 11th 2020*, **request** is fully deprecated. No new changes are expected to land. In fact, none have landed for some time.

The simplified and litest HTTP request client 'request' with Promise support.

```
  npm i request --save
```


```
const rp= require('.request-promise/index.js');

rp('https://booksmotion.com').then(data=>{
  console.log(data);
 }).catch(err=>{
  console.log(err);
 })

```
***
get, post, put , head, patch, del Are also supported!!!
***



Deepak Yadav Website:  [https://booksmotion.com/](https://booksmotion.com/)
