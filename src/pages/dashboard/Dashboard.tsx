import { useRef, useState } from 'react'
import { useEffect } from 'react'
import ChartsEmbedSDK, { getRealmUserToken } from '@mongodb-js/charts-embed-dom';
import EmbedSDK from '@mongodb-js/charts-embed-dom'
import Layout from '../../components/Layout/Layout';

const Dashboard = () => {
  const [dashboardSdk, setDashboardSdk] = useState<EmbedSDK | null>(null);
  useEffect(() => {
    if (!dashboardSdk) {
      const sdk = new ChartsEmbedSDK({
        baseUrl:  'https://charts.mongodb.com/charts-vargo-msbuk',
        // getUserToken: () => getRealmUserToken(authState.realmApp as any),
        widthMode: 'scale',
        heightMode: 'scale'
      });
      setDashboardSdk(sdk);
      const dashboard = sdk.createDashboard({
        dashboardId: 'bad0e601-a96d-4cfe-a6be-d554b2b11167'
      });
      dashboard
        .render(document.getElementById('dashboard') as any)
        .catch(() => console.log('Dashboard failed to initialise'));
    }

  })

  return (
    <Layout>
 <div id="dashboard" style={{ height: '800px' }} className="row" >
      </div>
    </Layout>
     
  )
}

export default Dashboard
