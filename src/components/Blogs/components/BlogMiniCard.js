import React from "react";
import images from "../../../assets/images";

const BlogMiniCard = (item) => {
    console.log("blog mini card",item);
    return (
        <div className="blogs__must-read-card">
            <img src={item.item.fullimage} alt="food" />
            <div className="blogs__must-read-card_content">
                <p>{item.item.title}</p>
            </div>
        </div>
    );
};

export default BlogMiniCard;
