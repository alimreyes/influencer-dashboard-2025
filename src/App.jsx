import React, { useState } from 'react';
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Eye, Heart, Activity } from 'lucide-react';

const InfluencerDashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState('Todos');

  // Función helper para formatear números
  const formatNumber = (num) => {
    return new Intl.NumberFormat('es-CL').format(num);
  };

  // Mapeo de nombres reales a anónimos (para consistencia interna)
  const influencerMap = {
    '@estefisancristobal': 'Influencer #1',
    '@pazgaetev': 'Influencer #2',
    '@milinorambuena': 'Influencer #3',
    '@felicesporelmundo': 'Influencer #4',
    '@pazgaete': 'Influencer #5',
    '@mileymulliez': 'Influencer #6',
    '@soynutri': 'Influencer #7',
    '@javihosmans': 'Influencer #8',
    '@barbibascunan': 'Influencer #9',
    '@paolaolave': 'Influencer #10',
    '@enfermeradelapiel': 'Influencer #11',
    '@soynicosaavedra': 'Influencer #12',
    '@annyela_viajera': 'Influencer #13',
    '@juanjomarchannt': 'Influencer #14',
    '@mjosefaj_': 'Influencer #15',
    '@javiiisidora': 'Influencer #16',
    '@minzka.asesorias': 'Influencer #17',
    '@pazgaete + @minzka.asesorias': 'Influencer #18',
    '@mjosefaj': 'Influencer #19',
    '@juanjomerchant': 'Influencer #20',
    '@kamehamejuan': 'Influencer #21',
    '@camilitavic': 'Influencer #22',
    '@catalina.yichi': 'Influencer #23',
    '@co.trigoo': 'Influencer #24',
    '@co.trigo': 'Influencer #25',
    '@pazgaetev': 'Influencer #26'
  };

  const data = [
    { month: 'Enero', influencer: 'Influencer #1', views: 27640, reach: 16384, interactions: 830, category: 'Alcance' },
    { month: 'Febrero', influencer: 'Influencer #2', views: 23331, reach: 6361, interactions: 143, category: 'Alcance' },
    { month: 'Febrero', influencer: 'Influencer #2', views: 17693, reach: 3624, interactions: 85, category: 'Alcance' },
    { month: 'Febrero', influencer: 'Influencer #3', views: 12178, reach: 6465, interactions: 199, category: 'Alcance' },
    { month: 'Febrero', influencer: 'Influencer #4', views: 38463, reach: 8469, interactions: 1304, category: 'Interacción' },
    { month: 'Marzo', influencer: 'Influencer #5', views: 25964, reach: 4505, interactions: 222, category: 'Interacción' },
    { month: 'Marzo', influencer: 'Influencer #6', views: 13609, reach: 7677, interactions: 226, category: 'Alcance' },
    { month: 'Marzo', influencer: 'Influencer #7', views: 24377, reach: 13099, interactions: 644, category: 'Alcance' },
    { month: 'Marzo', influencer: 'Influencer #4', views: 89750, reach: 17230, interactions: 1154, category: 'Interacción' },
    { month: 'Abril', influencer: 'Influencer #8', views: 18121, reach: 9850, interactions: 153, category: 'Interacción' },
    { month: 'Abril', influencer: 'Influencer #9', views: 16017, reach: 9004, interactions: 326, category: 'Interacción' },
    { month: 'Abril', influencer: 'Influencer #2', views: 36845, reach: 12279, interactions: 385, category: 'Alcance' },
    { month: 'Abril', influencer: 'Influencer #3', views: 19242, reach: 10507, interactions: 305, category: 'Interacción' },
    { month: 'Abril', influencer: 'Influencer #10', views: 13904, reach: 7707, interactions: 232, category: 'Alcance' },
    { month: 'Mayo', influencer: 'Influencer #8', views: 14806, reach: 7686, interactions: 524, category: 'Interacción' },
    { month: 'Mayo', influencer: 'Influencer #1', views: 18859, reach: 9422, interactions: 291, category: 'Alcance' },
    { month: 'Mayo', influencer: 'Influencer #4', views: 49733, reach: 10343, interactions: 927, category: 'Interacción' },
    { month: 'Mayo', influencer: 'Influencer #9', views: 31545, reach: 16760, interactions: 1147, category: 'Interacción' },
    { month: 'Mayo', influencer: 'Influencer #7', views: 18328, reach: 9886, interactions: 384, category: 'Alcance' },
    { month: 'Mayo', influencer: 'Influencer #11', views: 12088, reach: 7119, interactions: 113, category: 'Alcance' },
    { month: 'Mayo', influencer: 'Influencer #12', views: 41563, reach: 21675, interactions: 937, category: 'Interacción' },
    { month: 'Junio', influencer: 'Influencer #13', views: 9220, reach: 5439, interactions: 211, category: 'Alcance' },
    { month: 'Junio', influencer: 'Influencer #14', views: 14546, reach: 8129, interactions: 237, category: 'Alcance' },
    { month: 'Junio', influencer: 'Influencer #12', views: 9760, reach: 4684, interactions: 115, category: 'Interacción' },
    { month: 'Junio', influencer: 'Influencer #9', views: 28909, reach: 15864, interactions: 799, category: 'Interacción' },
    { month: 'Julio', influencer: 'Influencer #1', views: 13890, reach: 7644, interactions: 198, category: 'Alcance' },
    { month: 'Julio', influencer: 'Influencer #3', views: 14142, reach: 7128, interactions: 219, category: 'Interacción' },
    { month: 'Julio', influencer: 'Influencer #9', views: 17863, reach: 9679, interactions: 367, category: 'Interacción' },
    { month: 'Julio', influencer: 'Influencer #8', views: 11024, reach: 5720, interactions: 157, category: 'Alcance' },
    { month: 'Julio', influencer: 'Influencer #7', views: 31125, reach: 15438, interactions: 424, category: 'Alcance' },
    { month: 'Julio', influencer: 'Influencer #15', views: 14458, reach: 7420, interactions: 304, category: 'Interacción' },
    { month: 'Julio', influencer: 'Influencer #16', views: 21322, reach: 11569, interactions: 322, category: 'Alcance' },
    { month: 'Julio', influencer: 'Influencer #4', views: 47960, reach: 10867, interactions: 830, category: 'Interacción' },
    { month: 'Agosto', influencer: 'Influencer #9', views: 33562, reach: 17671, interactions: 1044, category: 'Interacción' },
    { month: 'Agosto', influencer: 'Influencer #17', views: 13975, reach: 0, interactions: 439, category: 'Alcance' },
    { month: 'Agosto', influencer: 'Influencer #18', views: 12068, reach: 7372, interactions: 645, category: 'Interacción' },
    { month: 'Agosto', influencer: 'Influencer #19', views: 9922, reach: 5416, interactions: 217, category: 'Interacción' },
    { month: 'Septiembre', influencer: 'Influencer #20', views: 9573, reach: 5781, interactions: 223, category: 'Alcance' },
    { month: 'Septiembre', influencer: 'Influencer #21', views: 7985, reach: 5272, interactions: 149, category: 'Alcance' },
    { month: 'Septiembre', influencer: 'Influencer #4', views: 35715, reach: 7268, interactions: 879, category: 'Interacción' },
    { month: 'Septiembre', influencer: 'Influencer #22', views: 18660, reach: 9741, interactions: 455, category: 'Interacción' },
    { month: 'Octubre', influencer: 'Influencer #7', views: 18298, reach: 9990, interactions: 450, category: 'Alcance' },
    { month: 'Octubre', influencer: 'Influencer #8', views: 37897, reach: 23634, interactions: 2241, category: 'Interacción' },
    { month: 'Octubre', influencer: 'Influencer #11', views: 27479, reach: 15178, interactions: 508, category: 'Interacción' },
    { month: 'Octubre', influencer: 'Influencer #9', views: 13400, reach: 7933, interactions: 303, category: 'Alcance' },
    { month: 'Octubre', influencer: 'Influencer #3', views: 11186, reach: 6265, interactions: 195, category: 'Alcance' },
    { month: 'Octubre', influencer: 'Influencer #23', views: 15438, reach: 8774, interactions: 273, category: 'Alcance' },
    { month: 'Noviembre', influencer: 'Influencer #24', views: 0, reach: 0, interactions: 0, category: 'Alcance' },
    { month: 'Noviembre', influencer: 'Influencer #25', views: 14496, reach: 8061, interactions: 278, category: 'Alcance' },
    { month: 'Noviembre', influencer: 'Influencer #9', views: 13801, reach: 8167, interactions: 231, category: 'Alcance' },
    { month: 'Noviembre', influencer: 'Influencer #4', views: 22920, reach: 9604, interactions: 458, category: 'Interacción' }
  ];

  const filteredData = selectedMonth === 'Todos' ? data : data.filter(d => d.month === selectedMonth);

  // Métricas generales (SIN COSTOS)
  const totalViews = filteredData.reduce((sum, d) => sum + d.views, 0);
  const totalReach = filteredData.reduce((sum, d) => sum + d.reach, 0);
  const totalInteractions = filteredData.reduce((sum, d) => sum + d.interactions, 0);
  const totalCampaigns = filteredData.length;

  // Engagement rate (sin CPM)
  const engagementRate = totalReach > 0 ? (totalInteractions / totalReach * 100) : 0;

  const monthlyData = data.reduce((acc, item) => {
    const existing = acc.find(m => m.month === item.month);
    if (existing) {
      existing.views += item.views;
      existing.reach += item.reach;
      existing.interactions += item.interactions;
    } else {
      acc.push({
        month: item.month,
        views: item.views,
        reach: item.reach,
        interactions: item.interactions
      });
    }
    return acc;
  }, []);

  const monthOrder = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'];
  monthlyData.sort((a, b) => monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month));

  // Top influencers (anónimos, sin costos)
  const influencerStats = {};
  data.forEach(item => {
    if (!influencerStats[item.influencer]) {
      influencerStats[item.influencer] = {
        name: item.influencer,
        campaigns: 0,
        views: 0,
        reach: 0,
        interactions: 0
      };
    }
    influencerStats[item.influencer].campaigns++;
    influencerStats[item.influencer].views += item.views;
    influencerStats[item.influencer].reach += item.reach;
    influencerStats[item.influencer].interactions += item.interactions;
  });

  const topInfluencers = Object.values(influencerStats).sort((a, b) => b.interactions - a.interactions).slice(0, 10);

  // Datos para gráficos
  const categoryData = [
    { name: 'Alcance', value: data.filter(d => d.category === 'Alcance').length },
    { name: 'Interacción', value: data.filter(d => d.category === 'Interacción').length }
  ];

  const COLORS = ['#3b82f6', '#10b981'];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 mb-8 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">📊 Dashboard de Influencers 2025</h1>
          <p className="text-blue-100">Análisis de performance y métricas de engagement</p>
        </div>

        {/* Filtro de mes */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <label htmlFor="month-filter" className="block text-sm font-medium text-gray-700 mb-2">
            Filtrar por mes:
          </label>
          <select 
            id="month-filter"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
          >
            <option value="Todos">Todos los meses</option>
            <option value="Enero">Enero</option>
            <option value="Febrero">Febrero</option>
            <option value="Marzo">Marzo</option>
            <option value="Abril">Abril</option>
            <option value="Mayo">Mayo</option>
            <option value="Junio">Junio</option>
            <option value="Julio">Julio</option>
            <option value="Agosto">Agosto</option>
            <option value="Septiembre">Septiembre</option>
            <option value="Octubre">Octubre</option>
            <option value="Noviembre">Noviembre</option>
            <option value="Diciembre">Diciembre</option>
          </select>
        </div>

        {/* KPIs principales (SIN COSTOS NI CPM) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Total Visualizaciones</p>
                <p className="text-2xl font-bold mt-1 text-gray-900">{formatNumber(totalViews)}</p>
              </div>
              <Eye className="w-12 h-12 text-blue-500 opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Alcance Total</p>
                <p className="text-2xl font-bold mt-1 text-gray-900">{formatNumber(totalReach)}</p>
              </div>
              <Users className="w-12 h-12 text-green-500 opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Interacciones</p>
                <p className="text-2xl font-bold mt-1 text-gray-900">{formatNumber(totalInteractions)}</p>
              </div>
              <Heart className="w-12 h-12 text-red-500 opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Engagement Rate</p>
                <p className="text-2xl font-bold mt-1 text-gray-900">{engagementRate.toFixed(2)}%</p>
              </div>
              <TrendingUp className="w-12 h-12 text-indigo-500 opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Total Campañas</p>
                <p className="text-2xl font-bold mt-1 text-gray-900">{totalCampaigns}</p>
              </div>
              <Activity className="w-12 h-12 text-purple-500 opacity-20" />
            </div>
          </div>
        </div>

        {/* Gráfico de evolución mensual */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">📈 Evolución Mensual de Métricas</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => formatNumber(value)} />
              <Legend />
              <Line type="monotone" dataKey="views" stroke="#3b82f6" name="Visualizaciones" strokeWidth={2} />
              <Line type="monotone" dataKey="reach" stroke="#10b981" name="Alcance" strokeWidth={2} />
              <Line type="monotone" dataKey="interactions" stroke="#ef4444" name="Interacciones" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Top influencers y categorías */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">🏆 Top 10 Influencers por Interacciones</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-gray-200 bg-gray-50">
                  <tr className="text-left">
                    <th className="pb-2 pt-2 px-2 font-semibold text-gray-700">Influencer</th>
                    <th className="text-right pb-2 pt-2 px-2 font-semibold text-gray-700">Campañas</th>
                    <th className="text-right pb-2 pt-2 px-2 font-semibold text-gray-700">Vistas</th>
                    <th className="text-right pb-2 pt-2 px-2 font-semibold text-gray-700">Alcance</th>
                    <th className="text-right pb-2 pt-2 px-2 font-semibold text-gray-700">Interacc.</th>
                  </tr>
                </thead>
                <tbody>
                  {topInfluencers.map((inf, idx) => (
                    <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-2 px-2 font-medium text-gray-900">{inf.name}</td>
                      <td className="text-right py-2 px-2 text-gray-900">{inf.campaigns}</td>
                      <td className="text-right py-2 px-2 text-gray-900">{formatNumber(inf.views)}</td>
                      <td className="text-right py-2 px-2 text-gray-900">{formatNumber(inf.reach)}</td>
                      <td className="text-right py-2 px-2 font-semibold text-green-600">{formatNumber(inf.interactions)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Distribución por Categoría</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                <span className="text-sm text-gray-900">Alcance: {categoryData[0].value} campañas</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                <span className="text-sm text-gray-900">Interacción: {categoryData[1].value} campañas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Insights */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-md p-6 text-white mb-8">
          <h3 className="text-xl font-semibold mb-4 text-white">💡 Insights Clave</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white bg-opacity-20 rounded p-4">
              <p className="font-semibold">Mejor Influencer por Engagement</p>
              <p className="text-sm mt-1">{topInfluencers[0]?.name} con {formatNumber(topInfluencers[0]?.interactions)} interacciones</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded p-4">
              <p className="font-semibold">Engagement Rate Promedio</p>
              <p className="text-sm mt-1">{engagementRate.toFixed(2)}% de tasa de interacción sobre el alcance total</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded p-4">
              <p className="font-semibold">Mes con Mayor Actividad</p>
              <p className="text-sm mt-1">{monthlyData.reduce((max, m) => m.interactions > max.interactions ? m : max, monthlyData[0])?.month}</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded p-4">
              <p className="font-semibold">Total Campañas 2025</p>
              <p className="text-sm mt-1">{data.length} colaboraciones con influencers</p>
            </div>
          </div>
        </div>

        {/* Footer disclaimer */}
        <div className="bg-gray-100 border-l-4 border-gray-400 rounded-lg shadow-md p-6">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Nota:</span> Los nombres de influencers han sido anonimizados por motivos de confidencialidad. 
            Las métricas mostradas reflejan datos reales de performance de campañas ejecutadas durante 2025.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfluencerDashboard;
