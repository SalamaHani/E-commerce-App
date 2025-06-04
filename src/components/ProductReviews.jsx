import ReviewCard from "./ReviewCard";

async function ProductReviews({ Reivws }) {
  return (
    <div className="mt-16">
      <div className="grid md:grid-cols-2 gap-8 my-8">
        {Reivws.map((review) => {
          const { comment, rating, authorImageUrl, authorName } = review;
          const reviewInfo = {
            comment,
            rating,
            image: authorImageUrl,
            name: authorName,
          };
          return <ReviewCard key={review.id} reviewInfo={reviewInfo} />;
        })}
      </div>
    </div>
  );
}
export default ProductReviews;
