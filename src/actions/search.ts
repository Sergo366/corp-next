import {redirect} from "next/navigation";
import Paths from "@/paths";

export async function search(formData: FormData) {
    const term = formData.get('term');

    if (typeof term !== 'string' || !term) {
        return redirect(Paths.home())
    }

    redirect(`/search?term=${term}`);
}