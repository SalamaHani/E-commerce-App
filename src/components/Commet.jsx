import { useState } from "react";
import { Button } from "./ui/button";

function Comment({ comment }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  const longComment = comment.split("").length > 130;
  // const longComment = comment.length > 130;
  const displayComment =
    longComment && !isExpanded ? `${comment.slice(0, 130)}...` : comment;

  return (
    <div>
      <p className="text-sm">{displayComment}</p>
      {longComment && (
        <Button
          variant="link"
          className="pl-0 text-muted-foreground"
          onClick={toggleExpanded}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </Button>
      )}
    </div>
  );
}
export default Comment;
