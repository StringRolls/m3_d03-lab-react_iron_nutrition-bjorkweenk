import { Card, Col, Button } from "antd";

function FoodBox(props) {
    return (
        <Col>
            <Card
                title={props.food.name}
                style={{ width: 230, height: 300, margin: 10 }}
            >   
                <img src={props.food.image} height={60} />
                <p>{props.food.calories}</p>
                <p>{props.food.serving}</p>
                <p>
                    <b>Total Calories: {props.food.calories * props.food.serving} </b> kcal
                </p>
                <Button type="primary"> Delete </Button>
            </Card>
        </Col>
    )
}

export default FoodBox;