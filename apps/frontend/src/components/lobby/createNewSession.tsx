import { useSessionStore } from "@/store/session/session.store";
import { Link } from "@tanstack/react-router";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  DynamicIcon,
} from "@ui/components";

export const CreateNewSession = () => {
  const { sessions } = useSessionStore();
  console.log(sessions);

  return (
    <Card className="w-[400px]">
      <CreateNewSessionHeader />
      <CreateNewSessionContent />
      <CreateNewSessionFooter />
    </Card>
  );
};

const CreateNewSessionHeader = () => (
  <CardHeader>
    <CardTitle>Create new session</CardTitle>
    <CardDescription>
      Select your feature film along with who are the stars of it. Also dont forget to select how
      resolutions should be handled.
    </CardDescription>
  </CardHeader>
);

const CreateNewSessionContent = () => (
  <CardContent>
    This is the create new session form...
    <br />
    final girl, feature film, game outcomes
  </CardContent>
);

const CreateNewSessionFooter = () => (
  <CardFooter className="flex justify-between">
    <Button asChild variant="ghost" className="gap-2">
      <Link to="/load">
        <DynamicIcon iconName="ArchiveIcon" className="h-4 w-4" />
        Load a session
      </Link>
    </Button>
    <Button>Create</Button>
  </CardFooter>
);
