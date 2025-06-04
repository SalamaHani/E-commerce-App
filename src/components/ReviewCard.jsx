import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { setstring } from "@/Util";

function ReviewCard({ reviewInfo }) {
  const { photo, name, email } = reviewInfo;
  return (
    <Card className="relative">
      <CardHeader>
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              {photo && photo != null ? (
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-100">
                  <img
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-100"
                    src={photo ?? ""}
                    alt="user"
                  />
                </div>
              ) : (
                <div className="w-12 h-12 flex items-center justify-center   overflow-hidden  bg-gray-600 border-gray-200 rounded-full dark:border-gray-800">
                  <span>{setstring(name ?? "")}</span>
                </div>
              )}
              <div>
                <span className="text-xs mb-0.5 block font-medium text-gray-700 dark:text-gray-400">
                  {name}
                </span>
                <span className="text-gray-500  text-xs dark:text-gray-400">
                  {email}
                </span>
              </div>
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-sm font-bold capitalize mb-1">
              {reviewInfo.name}
            </h3>
            <Rating rating={reviewInfo.rating} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Comment comment={reviewInfo.comment} />
      </CardContent>
      <div className="absolute top-3 right-3">{children}</div>
    </Card>
  );
}
export default ReviewCard;
