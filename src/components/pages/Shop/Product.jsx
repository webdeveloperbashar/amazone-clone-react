import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
const Product = (props) => {
    const {name, price, img} = props.product;
  return (
    <>
      <div className="col-md-3">
        <div className="item">
          <Card style={{ height: "350px", marginBottom: "20px" }}>
            <Card.Header>{`${name.slice(0, 20)}...`}</Card.Header>
            <Card.Body>
              <Card.Img variant="top" src={img} />
              <Card.Text style={{ textAlign: "center", paddingTop: "5px" }}>
                <h4>Price: {price}</h4>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted" style={{ textAlign: "center" }}>
              <Button onClick={()=>props.handleProduct(props.product)} variant="primary">
                Add to Cart
              </Button>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Product;
