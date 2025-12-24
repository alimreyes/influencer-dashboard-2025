import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, DollarSign, Eye, Heart, Target } from 'lucide-react';

const InfluencerDashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState('Todos');

  // Función helper para formatear números
  const formatNumber = (num) => {
    return new Intl.NumberFormat('es-CL').format(num);
  };

  const data = [
    { month: 'Enero', influencer: '@estefisancristobal', views: 27640, reach: 16384, interactions: 830, cost: 65000, category: 'Alcance' },
    { month: 'Febrero', influencer: '@pazgaetev', views: 23331, reach: 6361, interactions: 143, cost: 100000, category: 'Alcance' },
    { month: 'Febrero', influencer: '@pazgaetev', views: 17693, reach: 3624, interactions: 85, cost: 100000, category: 'Alcance' },
    { month: 'Febrero', influencer: '@milinorambuena', views: 12178, reach: 6465, interactions: 199, cost: 30000, category: 'Alcance' },
    { month: 'Febrero', influencer: '@felicesporelmundo', views: 38463, reach: 8469, interactions: 1304, cost: 150000, category: 'Interacción' },
    { month: 'Marzo', influencer: '@pazgaete', views: 25964, reach: 4505, interactions: 222, cost: 100000, category: 'Interacción' },
    { month: 'Marzo', influencer: '@mileymulliez', views: 13609, reach: 7677, interactions: 226, cost: 100000, category: 'Alcance' },
    { month: 'Marzo', influencer: '@soynutri', views: 24377, reach: 13099, interactions: 644, cost: 100000, category: 'Alcance' },
    { month: 'Marzo', influencer: '@felicesporelmundo', views: 89750, reach: 17230, interactions: 1154, cost: 150000, category: 'Interacción' },
    { month: 'Abril', influencer: '@javihosmans', views: 18121, reach: 9850, interactions: 153, cost: 50000, category: 'Interacción' },
    { month: 'Abril', influencer: '@barbibascunan', views: 16017, reach: 9004, interactions: 326, cost: 150000, category: 'Interacción' },
    { month: 'Abril', influencer: '@pazgaetev', views: 36845, reach: 12279, interactions: 385, cost: 100000, category: 'Alcance' },
    { month: 'Abril', influencer: '@milinorambuena', views: 19242, reach: 10507, interactions: 305, cost: 35000, category: 'Interacción' },
    { month: 'Abril', influencer: '@paolaolave', views: 13904, reach: 7707, interactions: 232, cost: 15000, category: 'Alcance' },
    { month: 'Mayo', influencer: '@javihosmans', views: 14806, reach: 7686, interactions: 524, cost: 0, category: 'Interacción' },
    { month: 'Mayo', influencer: '@estefisancristobal', views: 18859, reach: 9422, interactions: 291, cost: 70000, category: 'Alcance' },
    { month: 'Mayo', influencer: '@felicesporelmundo', views: 49733, reach: 10343, interactions: 927, cost: 150000, category: 'Interacción' },
    { month: 'Mayo', influencer: '@barbibascunan', views: 31545, reach: 16760, interactions: 1147, cost: 150000, category: 'Interacción' },
    { month: 'Mayo', influencer: '@soynutri', views: 18328, reach: 9886, interactions: 384, cost: 100000, category: 'Alcance' },
    { month: 'Mayo', influencer: '@enfermeradelapiel', views: 12088, reach: 7119, interactions: 113, cost: 50000, category: 'Alcance' },
    { month: 'Mayo', influencer: '@soynicosaavedra', views: 41563, reach: 21675, interactions: 937, cost: 70000, category: 'Interacción' },
    { month: 'Junio', influencer: '@annyela_viajera', views: 9220, reach: 5439, interactions: 211, cost: 70000, category: 'Alcance' },
    { month: 'Junio', influencer: '@juanjomarchannt', views: 14546, reach: 8129, interactions: 237, cost: 100000, category: 'Alcance' },
    { month: 'Junio', influencer: '@soynicosaavedra', views: 9760, reach: 4684, interactions: 115, cost: 70000, category: 'Interacción' },
    { month: 'Junio', influencer: '@barbibascunan', views: 28909, reach: 15864, interactions: 799, cost: 150000, category: 'Interacción' },
    { month: 'Julio', influencer: '@estefisancristobal', views: 13890, reach: 7644, interactions: 198, cost: 70000, category: 'Alcance' },
    { month: 'Julio', influencer: '@milinorambuena', views: 14142, reach: 7128, interactions: 219, cost: 35000, category: 'Interacción' },
    { month: 'Julio', influencer: '@barbibascunan', views: 17863, reach: 9679, interactions: 367, cost: 150000, category: 'Interacción' },
    { month: 'Julio', influencer: '@javihosmans', views: 11024, reach: 5720, interactions: 157, cost: 60000, category: 'Alcance' },
    { month: 'Julio', influencer: '@soynutri', views: 31125, reach: 15438, interactions: 424, cost: 100000, category: 'Alcance' },
    { month: 'Julio', influencer: '@mjosefaj_', views: 14458, reach: 7420, interactions: 304, cost: 60000, category: 'Interacción' },
    { month: 'Julio', influencer: '@javiiisidora', views: 21322, reach: 11569, interactions: 322, cost: 50000, category: 'Alcance' },
    { month: 'Julio', influencer: '@felicesporelmundo', views: 47960, reach: 10867, interactions: 830, cost: 150000, category: 'Interacción' },
    { month: 'Agosto', influencer: '@barbibascunan', views: 33562, reach: 17671, interactions: 1044, cost: 200000, category: 'Interacción' },
    { month: 'Agosto', influencer: '@minzka.asesorias', views: 13975, reach: 0, interactions: 439, cost: 0, category: 'Alcance' },
    { month: 'Agosto', influencer: '@pazgaete + @minzka.asesorias', views: 12068, reach: 7372, interactions: 645, cost: 100000, category: 'Interacción' },
    { month: 'Agosto', influencer: '@mjosefaj', views: 9922, reach: 5416, interactions: 217, cost: 60000, category: 'Interacción' },
    { month: 'Septiembre', influencer: '@juanjomerchant', views: 9573, reach: 5781, interactions: 223, cost: 100000, category: 'Alcance' },
    { month: 'Septiembre', influencer: '@kamehamejuan', views: 7985, reach: 5272, interactions: 149, cost: 100000, category: 'Alcance' },
    { month: 'Septiembre', influencer: '@felicesporelmundo', views: 35715, reach: 7268, interactions: 879, cost: 150000, category: 'Interacción' },
    { month: 'Septiembre', influencer: '@camilitavic', views: 18660, reach: 9741, interactions: 455, cost: 50000, category: 'Interacción' },
    { month: 'Octubre', influencer: '@soynutri', views: 18298, reach: 9990, interactions: 450, cost: 100000, category: 'Alcance' },
    { month: 'Octubre', influencer: '@javihosmans', views: 37897, reach: 23634, interactions: 2241, cost: 0, category: 'Interacción' },
    { month: 'Octubre', influencer: '@enfermeradelapiel', views: 27479, reach: 15178, interactions: 508, cost: 150000, category: 'Interacción' },
    { month: 'Octubre', influencer: '@barbibascunan', views: 13400, reach: 7933, interactions: 303, cost: 150000, category: 'Alcance' },
    { month: 'Octubre', influencer: '@milinorambuena', views: 11186, reach: 6265, interactions: 195, cost: 30000, category: 'Alcance' },
    { month: 'Octubre', influencer: '@catalina.yichi', views: 15438, reach: 8774, interactions: 273, cost: 60000, category: 'Alcance' },
    { month: 'Noviembre', influencer: '@co.trigoo', views: 0, reach: 0, interactions: 0, cost: 75000, category: 'Alcance' },
    { month: 'Noviembre', influencer: '@co.trigo', views: 14496, reach: 8061, interactions: 278, cost: 0, category: 'Alcance' },
    { month: 'Noviembre', influencer: '@barbibascunan', views: 13801, reach: 8167, interactions: 231, cost: 150000, category: 'Alcance' },
    { month: 'Noviembre', influencer: '@felicesporelmundo', views: 22920, reach: 9604, interactions: 458, cost: 150000, category: 'Interacción' }
  ];

  const filteredData = selectedMonth === 'Todos' ? data : data.filter(d => d.month === selectedMonth);

  // Métricas generales
  const totalViews = filteredData.reduce((sum, d) => sum + d.views, 0);
  const totalReach = filteredData.reduce((sum, d) => sum + d.reach, 0);
  const totalInteractions = filteredData.reduce((sum, d) => sum + d.interactions, 0);
  const totalCost = filteredData.reduce((sum, d) => sum + d.cost, 0);
  const totalCampaigns = filteredData.length;

  // CPM y engagement
  const cpm = totalReach > 0 ? (totalCost / totalReach * 1000) : 0;
  const engagementRate = totalReach > 0 ? (totalInteractions / totalReach * 100) : 0;

  // Datos de presupuesto por mes
  const budgetData = [
    { month: 'Enero', budget: 800000, spent: 380000 },
    { month: 'Febrero', budget: 800000, spent: 380000 },
    { month: 'Marzo', budget: 449000, spent: 380000 },
    { month: 'Abril', budget: 449000, spent: 350000 },
    { month: 'Mayo', budget: 588000, spent: 590000 },
    { month: 'Junio', budget: 449000, spent: 390000 },
    { month: 'Julio', budget: 700000, spent: 675000 },
    { month: 'Agosto', budget: 530000, spent: 360000 },
    { month: 'Septiembre', budget: 535000, spent: 400000 },
    { month: 'Octubre', budget: 700000, spent: 490000 },
    { month: 'Noviembre', budget: 700000, spent: 375000 }
  ];

  const monthlyData = data.reduce((acc, item) => {
    const existing = acc.find(m => m.month === item.month);
    if (existing) {
      existing.views += item.views;
      existing.reach += item.reach;
      existing.interactions += item.interactions;
      existing.cost += item.cost;
    } else {
      acc.push({
        month: item.month,
        views: item.views,
        reach: item.reach,
        interactions: item.interactions,
        cost: item.cost
      });
    }
    return acc;
  }, []);

  const monthOrder = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'];
  monthlyData.sort((a, b) => monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month));

  // Agregar datos de presupuesto a monthlyData
  monthlyData.forEach(m => {
    const budgetInfo = budgetData.find(b => b.month === m.month);
    if (budgetInfo) {
      m.budget = budgetInfo.budget;
      m.spent = budgetInfo.spent;
      m.remaining = budgetInfo.budget - m.cost;
      m.usagePercent = ((m.cost / budgetInfo.budget) * 100).toFixed(1);
    }
  });

  // Cálculos presupuestarios totales
  const totalBudget = budgetData.reduce((sum, m) => sum + m.budget, 0);
  const totalSpent = budgetData.reduce((sum, m) => sum + m.spent, 0);
  const totalRemaining = totalBudget - totalSpent;
  const budgetUsagePercent = ((totalSpent / totalBudget) * 100).toFixed(1);

  // Top influencers
  const influencerStats = {};
  data.forEach(item => {
    if (!influencerStats[item.influencer]) {
      influencerStats[item.influencer] = {
        name: item.influencer,
        campaigns: 0,
        views: 0,
        reach: 0,
        interactions: 0,
        cost: 0
      };
    }
    influencerStats[item.influencer].campaigns++;
    influencerStats[item.influencer].views += item.views;
    influencerStats[item.influencer].reach += item.reach;
    influencerStats[item.influencer].interactions += item.interactions;
    influencerStats[item.influencer].cost += item.cost;
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
          <p className="text-blue-100">Análisis completo de campañas y métricas de rendimiento</p>
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

        {/* KPIs principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Inversión Total</p>
                <p className="text-2xl font-bold mt-1 text-gray-900">${formatNumber(totalCost)}</p>
              </div>
              <DollarSign className="w-12 h-12 text-purple-500 opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">CPM Promedio</p>
                <p className="text-2xl font-bold mt-1 text-gray-900">${Math.round(cpm)}</p>
              </div>
              <Target className="w-12 h-12 text-yellow-500 opacity-20" />
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

        {/* Gráfico de presupuesto vs gasto */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">💰 Presupuesto vs Gasto Real</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => `$${formatNumber(value)}`} />
              <Legend />
              <Bar dataKey="budget" fill="#94a3b8" name="Presupuesto Asignado" />
              <Bar dataKey="cost" fill="#3b82f6" name="Gasto en Influencers" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {monthlyData.map(m => (
              <div key={m.month} className="text-sm">
                <p className="font-semibold text-gray-900">{m.month}</p>
                <p className="text-gray-600">Uso: {m.usagePercent}%</p>
                <p className={`text-xs ${parseFloat(m.usagePercent) > 100 ? 'text-red-600' : 'text-green-600'}`}>
                  {parseFloat(m.usagePercent) > 100 ? 'Sobre presupuesto' : 'Dentro del presupuesto'}
                </p>
              </div>
            ))}
          </div>
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
                    <th className="text-right pb-2 pt-2 px-2 font-semibold text-gray-700">Inversión</th>
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
                      <td className="text-right py-2 px-2 text-gray-900">${formatNumber(inf.cost)}</td>
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

        {/* Alertas de presupuesto */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-amber-900 mb-4 flex items-center">
            <span className="text-2xl mr-2">⚠️</span>
            Oportunidades de Optimización Presupuestaria
          </h3>
          <div className="space-y-3">
            <div className="bg-white rounded p-4">
              <p className="font-semibold text-amber-900">💰 Presupuesto Total Disponible</p>
              <p className="text-2xl font-bold text-amber-600 mt-1">${formatNumber(totalRemaining)}</p>
              <p className="text-sm text-gray-600 mt-1">
                De un presupuesto anual de ${formatNumber(totalBudget)}, se han utilizado ${formatNumber(totalSpent)} ({budgetUsagePercent}%)
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded p-4">
                <p className="font-semibold text-gray-900">Meses Sub-utilizados</p>
                <p className="text-sm text-gray-600 mt-2">
                  {monthlyData.filter(m => parseFloat(m.usagePercent) < 80).map(m => m.month).join(', ') || 'Ninguno'}
                </p>
                <p className="text-xs text-gray-500 mt-1">Presupuesto usado menor al 80%</p>
              </div>
              <div className="bg-white rounded p-4">
                <p className="font-semibold text-gray-900">Mayor Sobrante Mensual</p>
                <p className="text-sm text-gray-600 mt-2">
                  {monthlyData.reduce((max, m) => m.remaining > max.remaining ? m : max, monthlyData[0])?.month}: 
                  <span className="font-bold text-green-600"> ${formatNumber(monthlyData.reduce((max, m) => m.remaining > max.remaining ? m : max, monthlyData[0])?.remaining)}</span>
                </p>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded p-4">
              <p className="font-semibold text-green-900">💡 Recomendación</p>
              <p className="text-sm text-green-800 mt-1">
                Con ${formatNumber(totalRemaining)} disponibles, se podrían ejecutar aproximadamente {Math.floor(totalRemaining / 100000)} campañas adicionales 
                con influencers de rango medio ($80K-$150K), lo que podría aumentar significativamente el alcance en el último trimestre del año.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerDashboard;
