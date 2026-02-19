import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

function Error() {
    const navigate = useNavigate()
  return (
    <Card className="max-w-md mx-auto px-6  ">
      <div className="flex flex-col items-center justify-center  py-3 text-center">
        <h2 className="mb-6 text-4xl sm:text-5xl font-semibold">Whoops!</h2>
        <h3 className="mb-1.5 text-3xl font-semibold">Something went wrong</h3>
        <p className="text-muted-foreground mb-6 max-w-sm">
          The page you&apos;re looking for isn&apos;t found, we suggest you back
          to home.
        </p>
        <Button  onClick={()=>{ navigate("/") }} size="lg" className="rounded-lg text-base">
          Back To Home
        </Button>
      </div>
    </Card>
  );
}

export default Error;
