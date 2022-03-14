import React, { useState, useContext, useEffect } from 'react';
import './DetailForDelivery.css';
import { useHistory } from 'react-router-dom';
import contextValue from '../../context/context';
import SalesService from '../../service/sale.service';
import Utils from '../../utils/functions/index';

export default function DetailForDelivery() {
  const [select, setSelect] = useState(null);
  const [address, setAddress] = useState(null);
  const [number, setNumber] = useState(null);
  const [sellers, setSellers] = useState([]);

  const { totalPrice, user } = useContext(contextValue);
  const history = useHistory();

  useEffect(() => {
    new SalesService()
      .getSellerAll(Utils.getLocalStorage('user').token)
      .then((res) => { if (res) setSellers(res.data); })
      .catch((err) => { console.error(err); });
  }, []);

  const handlerInput = ({ target: { value } }, set) => {
    set(value);
  };

  const saleCreate = () => {
    const obj = {
      seller_id: +select,
      user_id: +user.id,
      total_price: Utils.removeMaskNumber(totalPrice),
      delivery_address: address,
      delivery_number: number,
      status: 'AGUARDANDO PAGAMENTO',
      sale_date: new Date(),
    };
    new SalesService()
      .createSale(Utils.getLocalStorage('user').token, obj)
      .then((res) => {
        console.log(res);
        history.push(`/customer/orders/${res.data.id}`);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="detail-for-delivery">
      <form className="form-address">
        <label htmlFor="select-seller">
          P.Vendedora Responsável
          <select
            id="select-seller"
            data-testid="customer_checkout__select-seller"
            onClick={ (event) => handlerInput(event, setSelect) }
          >
            {
              sellers.map((seller) => (
                <option key={ seller.id } value={ seller.id }>{seller.name}</option>
              ))
            }

          </select>
        </label>

        <label htmlFor="input-address">
          Endereço
          <input
            type="text"
            name="input-address"
            data-testid="customer_checkout__input-address"
            onChange={ (event) => handlerInput(event, setAddress) }
          />
        </label>

        <label htmlFor="input-addressNumber">
          Número
          <input
            type="text"
            name="input-addressNumber"
            data-testid="customer_checkout__input-addressNumber"
            onChange={ (event) => handlerInput(event, setNumber) }
          />
        </label>
      </form>

      <button
        data-testid="customer_checkout__button-submit-order"
        type="button"
        onClick={ saleCreate }
      >
        FINALIZAR PEDIDO
      </button>
    </div>
  );
}
