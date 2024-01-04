import Disqus from "disqus-react";
import Navbar from "../Components/Navbar";
function Discussion() {
    const disqusShortname = "antibully";
    const disqusConfig = {
        url: "http://localhost:3000",
        identifier: "article-id",
        title: "Anti-Bully",
    };
    return (
        <>
            <Navbar />
            <div className="pt-5">
                <div className="kontenKomponen">
                    <div className="diskusi">
                        <Disqus.DiscussionEmbed
                            shortname={disqusShortname}
                            config={disqusConfig}
                        />
                    </div>
                </div>
            </div>

        </>
    );
}

export default Discussion;