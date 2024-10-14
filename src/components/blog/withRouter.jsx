import { useParams } from 'react-router-dom';

export function withRouter(Component) {
    function ComponentWithRouterProps(props) {
      let params = useParams();
      return <Component {...props} params={params} />;
    }
  
    return ComponentWithRouterProps;
  }