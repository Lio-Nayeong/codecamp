import { useMutation, gql } from "@apollo/client";
import React, { useState } from "react";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");

  const onClickSubmit = async () => {
    const res = await createProduct({
      variables: {
        seller: seller,
        createProductInput: {
          name: name,
          detail: detail,
          price: price,
        },
      },
    });
    console.log(res);
    alert(res.data.createProduct.message);
  };
  const onChangeSeller = (event) => {
    setSeller(event.target.value);
  };
  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeDetail = (event) => {
    setDetail(event.target.value);
  };
  const onChangePrice = (event) => {
    setPrice(Number(event.target.value));
  };

  return (
    <>
      <div>
        Graphql Api - <i>createProduct</i>
      </div>
      <div>
        판매자 : <input type="text" onChange={onChangeSeller}></input>
      </div>
      <div>
        상품명 : <input type="text" onChange={onChangeName}></input>
      </div>
      <div>
        설명 : <input type="text" onChange={onChangeDetail}></input>
      </div>
      <div>
        가격 : <input type="text" onChange={onChangePrice}></input>
      </div>
      <button onClick={onClickSubmit}>동기 요청</button>
    </>
  );
}
