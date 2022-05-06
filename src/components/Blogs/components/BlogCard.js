import React from "react";
import { Card } from "antd";
import { LikeOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import images from "../../../assets/images";

const { Meta } = Card;

const BlogCard = (item,allArray) => {    
    console.log("Blog array  sheet..",allArray)
    const navigate = useNavigate();
    const detailPage=(item,allArray)=>{
        console.log("Blog Data.2..",item);
        console.log("blog card array..",allArray);
        navigate("/blog-details",{ state:{ blogId: item,allArray:allArray}})
    }

    return (
        <Card
            onClick={() => detailPage(item.item,allArray)}
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
