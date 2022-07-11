## Another Next experimentation

The idea is to use the getServerSideProps at the highest, with full Typesafe coverture.

See /pages/github/[id].tsx.

A Context is created which is accessible by the child components.
The child components can use `refreshData` to initiate a client redirect, causing a new fetching of getServerSideProps.


```shell
yarn
yarn dev
```