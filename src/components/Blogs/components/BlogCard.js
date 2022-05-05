import React from "react";
import { Card } from "antd";
import { LikeOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import images from "../../../assets/images";

const { Meta } = Card;

const BlogCard = (item) => {
    
    console.log("Blog details on detail sheet..",item.item)
    const navigate = useNavigate();

    const detailPage=(item)=>{
        console.log("Blog Data.2..",item)
        navigate("/blog-details",{ state:{ blogId: item}})
    }

    return (
        <Card
            onClick={() => detailPage(item.item)}
            className="blogs__blog-card"
            hoverable
            cover={
                <img
                    alt="food"
                    src={images.food}
                    className="blogs__blog-card-image"
                />
            }
        >
            <Meta title={item.item.title} />
            <p>{item.item.short_desc}</p>
        </Card>
    );
};

export default BlogCard;
