import * as React from 'react';
import { NextPage, NextPageContext } from 'next';

interface Props {
  query: { message?: string };
}

const Index: NextPage<Props> = (props: Props) => {
  return <div>Hello world this is react rendering 2 {props.query.message}</div>;
};
Index.getInitialProps = async (ctx: NextPageContext) => {
  const { query } = ctx;
  return { query };
};

export default Index;
