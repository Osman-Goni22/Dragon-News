import Marquee from "react-fast-marquee";


const LatestNews = () => {
    return (
        <div className="flex items-center bg-gray-300 p-2">
            <button className="btn btn-error">Latest</button>
        <Marquee pauseOnHover={true} speed={100}  behavior="" direction="left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus ipsam repellat consequatur porro, accusamus voluptatibus quis pariatur eius! Perferendis fugiat dolor quam nostrum nam perspiciatis, vel minima quibusdam optio nobis quasi praesentium officia. Reiciendis a quisquam est voluptate vel earum quidem itaque, ratione labore obcaecati, tempora autem cupiditate numquam culpa laudantium, maiores dignissimos nostrum fugit dicta laboriosam. Nostrum, repudiandae. Tempora, quidem voluptas? Totam perferendis, non sunt quos blanditiis quam explicabo vero natus fugit facere nam numquam accusamus ullam nostrum. Similique, suscipit est esse laudantium beatae cupiditate! In neque distinctio dignissimos quibusdam id. Quod nisi cumque minus fugiat quibusdam! Odio, incidunt.</Marquee>
        </div>
    );
};

export default LatestNews;