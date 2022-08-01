import { React } from 'react';
import Page from "../Page";
import BalanceCard from '../BalanceCard';

const List = ({ summaryData, onClickHandler, children }) => {
    const summaryComponents = summaryData.map(
      (o) => {
        return (
          <BalanceCard
            key={o._id}
            type={o._id}
            documents={o.nombre}
            amount={o.identidad}
            onClicked={() => onClickHandler(o._id)}
          />
        )
      }
    );

    return (
        <Page pageTitle="Results">
          <section>
            {summaryComponents}
          </section>
          {children}
        </Page>
      )
 };  

export default List