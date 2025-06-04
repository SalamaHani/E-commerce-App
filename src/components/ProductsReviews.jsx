import ReviewCard from "./ReviewCard";
function ProductsReviews({ reviews }) {
  if (reviews.length == 0) {
    return null;
  }
  return (
    <div className="mt-16">
      <div className="grid md:grid-cols-2 gap-8 my-8">
        {reviews.map((review) => {
          const { comment, rating, author_name } = review;
          const user = review.user != null ? review.user : null;
          const reviewInfo = {
            comment,
            rating,
            author_name,
            user,
          };
          return <ReviewCard key={review.id} reviewInfo={reviewInfo} />;
        })}
      </div>
    </div>
  );
}
export default ProductsReviews;
