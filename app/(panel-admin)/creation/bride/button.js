import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SubmitButton({ loading }) {
  return (
    <Button variant="primary" className="w-full" disabled={loading}>
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          <p>Please wait</p>
        </>
      ) : (
        <p>Simpan</p>
      )}
    </Button>
  );
}
