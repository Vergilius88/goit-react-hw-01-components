import React from 'react';
import PropTypes from 'prop-types';
import randomColor from "randomcolor";

import TransactionHistoryStyled from './transactionHistoryStyled';


const { Transaction, Thead, Tr, ItemT, Tbody, Item } = TransactionHistoryStyled;

function TransactionHistory({ items }) {
  return (
    <Transaction>
      <Thead rgb={randomColor}>
        <Tr>
          <ItemT>Type</ItemT>
          <ItemT>Amount</ItemT>
          <ItemT>Currency</ItemT>
        </Tr>
      </Thead>

      <Tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Tr key={id}>
            <Item>{type}</Item>
            <Item>{amount}</Item>
            <Item>{currency}</Item>
          </Tr>
        ))}
      </Tbody>
    </Transaction>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
