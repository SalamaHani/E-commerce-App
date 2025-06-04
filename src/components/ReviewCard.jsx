import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Comment from "./Commet";
import { setstring } from "@/Util";
import Reivwe from "./Reivwe";

function ReviewCard({ reviewInfo }) {
  const { comment, rating, author_name, user } = reviewInfo;
  return (
    <Card className="relative dark:bg-gray-800">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <div className="flex items-center gap-3">
                  {user?.photo && user?.photo != null ? (
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-100">
                      <img
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-100"
                        src={user?.photo ?? ""}
                        alt="user"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 flex items-center justify-center   overflow-hidden  bg-gray-300 border-gray-200 rounded-full dark:border-gray-800">
                      <span>{setstring(author_name ?? "")}</span>
                    </div>
                  )}
                  <div>
                    <span className="text-xs mb-0.5 block font-medium text-gray-700 dark:text-gray-400">
                      {author_name}
                    </span>
                    <span className="text-gray-500  text-xs dark:text-gray-400">
                      {user?.email ?? ""}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-4 ">
            <Reivwe Reaviw={rating} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Comment comment={comment} />
      </CardContent>
    </Card>
  );
}
export default ReviewCard;
