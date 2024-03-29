import Issue from "pages/Issue";
import Layout from "components/Layout";
import { createBrowserRouter } from "react-router-dom";
import IssueDetail from "pages/IssueDetail";

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Issue />,
				children: [
					{
						path: "main",
						elememt: <Issue />,
					},
				],
			},
			{
				path: "/:issueId",
				element: <IssueDetail />,
			},
		],
	},
]);

export default router;
