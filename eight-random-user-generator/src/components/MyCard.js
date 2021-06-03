import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FaMapMarkedAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const MyCard = ({ details }) => {
  const data = details[0];
  console.log(JSON.stringify(data));

  return (
    <Card>
      <CardBody className="text-center">
        <img
          src={data?.picture.large}
          alt="Profile Image"
          className="img-thumbnail rounded-circle border-danger"
          width="150"
          height="150"
        />
        <CardTitle className="text-primary">
          <h3>
            <span className="px2">{data?.name.title}</span>
            <span className="p2">{data?.name.first}</span>
            <span className="p2">{data?.name.last}</span>
          </h3>
        </CardTitle>
        <CardText>
          <p>
            <span className="px2">
              <FaEnvelope />
            </span>
            {data?.email}
          </p>
          <p>
            <span>
              <FaMapMarkedAlt />
            </span>
            <span>{data?.location.city}</span>
            <span>{data?.location?.state}</span>
          </p>
          <p>
            <span>
              <FaPhone />
            </span>
            {data?.phone}
          </p>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default MyCard;
