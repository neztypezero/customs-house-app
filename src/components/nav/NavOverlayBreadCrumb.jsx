import {Link} from 'react-router-dom';
import {rootRoute} from "../screens/ScreenRoutes";

function breakPath(path) {
	let p = path.replace(rootRoute.path, '').split('/');
	if (p.length < 2) {
		return [{path:null,label:""}];
	}
	let a = Array(p.length-1), cp = path;
	for (let i=p.length-2;i>=0;i--) {
		a[i] = {
			label:p[i],
			path:cp
		}
		const index = cp.lastIndexOf(p[i]);
		if (index > -1) {
			cp = cp.substr(0, index);
		}
	}
	a[a.length-1].path = null;
	return a;
}

function NavOverlayBreadCrumb({path}) {
	return (
		<label><span>
			{breakPath(path).map((c, i) =>
				<>
					{i>0?' | ':''}
					{c.path?<Link draggable="false" to={c.path}>{c.label}</Link>:c.label}					
				</>
			)}
		</span></label>
	);
}

export default NavOverlayBreadCrumb;
