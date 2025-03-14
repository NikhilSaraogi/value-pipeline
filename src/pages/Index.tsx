
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Main content area */}
        <div className="flex-1">
          {/* This React component will serve as a wrapper around the HTML content */}
          <div className="p-6" dangerouslySetInnerHTML={{ __html: `
            <div class="dashboard-content">
              <!-- Top KPI Cards -->
              <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div class="kpi-card">
                  <div class="flex items-center mb-2">
                    <div class="kpi-icon text-adani-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 9.5V21m0-11.5L6 3m6 6.5L18 3" />
                      </svg>
                    </div>
                    <div class="ml-2 text-sm text-gray-600">Eco Inlet Temperature</div>
                  </div>
                  <div class="text-2xl font-bold text-adani-blue" id="eco-inlet-temp">220.5 <span class="text-sm font-normal">°C</span></div>
                </div>
                
                <div class="kpi-card">
                  <div class="flex items-center mb-2">
                    <div class="kpi-icon text-adani-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                    </div>
                    <div class="ml-2 text-sm text-gray-600">Load</div>
                  </div>
                  <div class="text-2xl font-bold text-adani-blue" id="load-value">660 <span class="text-sm font-normal">MW</span></div>
                </div>
                
                <div class="kpi-card">
                  <div class="flex items-center mb-2">
                    <div class="kpi-icon text-adani-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 19h16" />
                        <path d="M4 15h16" />
                        <path d="M4 11h16" />
                        <path d="M4 7h16" />
                      </svg>
                    </div>
                    <div class="ml-2 text-sm text-gray-600">HDR Pressure</div>
                  </div>
                  <div class="text-2xl font-bold text-adani-blue" id="hdr-pressure">170.2 <span class="text-sm font-normal">bar</span></div>
                </div>
                
                <div class="kpi-card">
                  <div class="flex items-center mb-2">
                    <div class="kpi-icon text-adani-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2v2" />
                        <path d="M12 14v8" />
                        <circle cx="12" cy="9" r="7" />
                      </svg>
                    </div>
                    <div class="ml-2 text-sm text-gray-600">Feed Water Flow</div>
                  </div>
                  <div class="text-2xl font-bold text-adani-blue" id="feed-water-flow">1890 <span class="text-sm font-normal">t/h</span></div>
                </div>
              </div>
              
              <!-- HP Heater Cards -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <!-- HP Heater 1 -->
                <div class="heater-card">
                  <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-semibold">HP Heater 1</h3>
                    <div class="level-indicator bg-green-100 text-green-800 px-2 py-1 text-xs rounded">
                      Level: 52%
                    </div>
                  </div>
                  
                  <div class="grid grid-cols-3 gap-4 mb-4">
                    <div class="parameter-box">
                      <div class="flex items-center">
                        <div class="parameter-icon text-green-500">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 22V8h-4V4H8v4H4v14h16z" />
                            <path d="M6 18h12" />
                            <path d="M6 14h12" />
                            <path d="M6 10h12" />
                          </svg>
                        </div>
                        <div class="ml-1">
                          <div class="text-xs text-gray-500">Heat Load</div>
                          <div class="flex items-center">
                            <span class="font-semibold">52.4</span>
                            <span class="text-xs ml-1">MW</span>
                            <span class="ml-1 text-xs text-green-500">↑ 1.2%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="parameter-box">
                      <div class="flex items-center">
                        <div class="parameter-icon text-blue-500">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 2v6a2 2 0 0 0 2 2h6" />
                            <path d="M12 8a2 2 0 0 1-2-2V2" />
                            <path d="M20 2v6a2 2 0 0 1-2 2" />
                            <path d="M18 14v7" />
                            <path d="M18 17h-5" />
                            <path d="M7 9H2" />
                            <path d="M12 12H2" />
                            <path d="M7 15H2" />
                          </svg>
                        </div>
                        <div class="ml-1">
                          <div class="text-xs text-gray-500">Flow</div>
                          <div class="flex items-center">
                            <span class="font-semibold">630</span>
                            <span class="text-xs ml-1">t/h</span>
                            <span class="ml-1 text-xs text-green-500">↑ 0.5%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="parameter-box">
                      <div class="flex items-center">
                        <div class="parameter-icon text-red-500">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M14 4l-5 5 5 5" />
                            <path d="M9 9h11" />
                            <path d="M10 20l5-5-5-5" />
                            <path d="M15 15H4" />
                          </svg>
                        </div>
                        <div class="ml-1">
                          <div class="text-xs text-gray-500">TTD</div>
                          <div class="flex items-center">
                            <span class="font-semibold">2.8</span>
                            <span class="text-xs ml-1">°C</span>
                            <span class="ml-1 text-xs text-red-500">↑ 0.2%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="grid grid-cols-2 gap-4 mb-4">
                    <div class="parameter-box">
                      <div class="flex items-center">
                        <div class="parameter-icon text-green-500">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 9.5V21m0-11.5L6 3m6 6.5L18 3" />
                          </svg>
                        </div>
                        <div class="ml-1">
                          <div class="text-xs text-gray-500">DCA</div>
                          <div class="flex items-center">
                            <span class="font-semibold">4.5</span>
                            <span class="text-xs ml-1">°C</span>
                            <span class="ml-1 text-xs text-green-500">↑ 0.1%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="parameter-box">
                      <div class="flex items-center">
                        <div class="parameter-icon text-purple-500">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 19H6c-1.7 0-3-1.3-3-3V8c0-1.7 1.3-3 3-3h12c1.7 0 3 1.3 3 3v8c0 1.7-1.3 3-3 3z" />
                            <path d="M16 8v8" />
                            <path d="M12 8v8" />
                            <path d="M8 8v8" />
                          </svg>
                        </div>
                        <div class="ml-1">
                          <div class="text-xs text-gray-500">TR</div>
                          <div class="flex items-center">
                            <span class="font-semibold">0.92</span>
                            <span class="ml-1 text-xs text-green-500">↑ 0%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="grid grid-cols-2 gap-4">
                    <div class="enthalpy-values">
                      <h4 class="text-sm font-medium text-gray-600 mb-2">Enthalpy Values</h4>
                      <div class="text-xs space-y-1">
                        <div class="flex justify-between">
                          <span class="text-gray-500">Trip:</span>
                          <span class="font-medium text-blue-600">3260 kJ/kg</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-500">FW Inlet:</span>
                          <span class="font-medium text-blue-600">983 kJ/kg</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-500">FW Outlet:</span>
                          <span class="font-medium text-blue-600">1066 kJ/kg</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-500">Extraction:</span>
                          <span class="font-medium text-blue-600">3140 kJ/kg</span>
                        </div>
                      </div>
                    </div>
                    
                    <div class="temperature-pressure">
                      <h4 class="text-sm font-medium text-gray-600 mb-2">Temperature & Pressure</h4>
                      <div class="text-xs space-y-1">
                        <div class="flex justify-between">
                          <span class="text-gray-500">FW Inlet:</span>
                          <span class="font-medium text-blue-600">192.5 °C</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-500">FW Outlet:</span>
                          <span class="font-medium text-blue-600">215.2 °C</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-500">Ext Temp:</span>
                          <span class="font-medium text-blue-600">342.8 °C</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-500">Ext Press:</span>
                          <span class="font-medium text-blue-600">32.6 bar</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- HP Heater 2 -->
                <div class="heater-card">
                  <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-semibold">HP Heater 2</h3>
                    <div class="level-indicator bg-yellow-100 text-yellow-800 px-2 py-1 text-xs rounded">
                      Level: 65%
                    </div>
                  </div>
                  
                  <div class="grid grid-cols-3 gap-4 mb-4">
                    <div class="parameter-box">
                      <div class="flex items-center">
                        <div class="parameter-icon text-yellow-500">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 22V8h-4V4H8v4H4v14h16z" />
                            <path d="M6 18h12" />
                            <path d="M6 14h12" />
                            <path d="M6 10h12" />
                          </svg>
                        </div>
                        <div class="ml-1">
                          <div class="text-xs text-gray-500">Heat Load</div>
                          <div class="flex items-center">
                            <span class="font-semibold">48.7</span>
                            <span class="text-xs ml-1">MW</span>
                            <span class="ml-1 text-xs text-yellow-500">↑ 2.3%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="parameter-box">
                      <div class="flex items-center">
                        <div class="parameter-icon text-blue-500">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 2v6a2 2 0 0 0 2 2h6" />
                            <path d="M12 8a2 2 0 0 1-2-2V2" />
                            <path d="M20 2v6a2 2 0 0 1-2 2" />
                            <path d="M18 14v7" />
                            <path d="M18 17h-5" />
                            <path d="M7 9H2" />
                            <path d="M12 12H2" />
                            <path d="M7 15H2" />
                          </svg>
                        </div>
                        <div class="ml-1">
                          <div class="text-xs text-gray-500">Flow</div>
                          <div class="flex items-center">
                            <span class="font-semibold">625</span>
                            <span class="text-xs ml-1">t/h</span>
                            <span class="ml-1 text-xs text-green-500">↑ 0.2%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="parameter-box">
                      <div class="flex items-center">
                        <div class="parameter-icon text-blue-500">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M14 4l-5 5 5 5" />
                            <path d="M9 9h11" />
                            <path d="M10 20l5-5-5-5" />
                            <path d="M15 15H4" />
                          </svg>
                        </div>
                        <div class="ml-1">
                          <div class="text-xs text-gray-500">TTD</div>
                          <div class="flex items-center">
                            <span class="font-semibold">3.6</span>
                            <span class="text-xs ml-1">°C</span>
                            <span class="ml-1 text-xs text-blue-500">↑ 1.3%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="grid grid-cols-2 gap-4 mb-4">
                    <div class="parameter-box">
                      <div class="flex items-center">
                        <div class="parameter-icon text-yellow-500">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 9.5V21m0-11.5L6 3m6 6.5L18 3" />
                          </svg>
                        </div>
                        <div class="ml-1">
                          <div class="text-xs text-gray-500">DCA</div>
                          <div class="flex items-center">
                            <span class="font-semibold">5.2</span>
                            <span class="text-xs ml-1">°C</span>
                            <span class="ml-1 text-xs text-green-500">↑ 0.8%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="parameter-box">
                      <div class="flex items-center">
                        <div class="parameter-icon text-yellow-500">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 19H6c-1.7 0-3-1.3-3-3V8c0-1.7 1.3-3 3-3h12c1.7 0 3 1.3 3 3v8c0 1.7-1.3 3-3 3z" />
                            <path d="M16 8v8" />
                            <path d="M12 8v8" />
                            <path d="M8 8v8" />
                          </svg>
                        </div>
                        <div class="ml-1">
                          <div class="text-xs text-gray-500">TR</div>
                          <div class="flex items-center">
                            <span class="font-semibold">0.89</span>
                            <span class="ml-1 text-xs text-red-500">↓ 0.02%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="grid grid-cols-2 gap-4">
                    <div class="enthalpy-values">
                      <h4 class="text-sm font-medium text-gray-600 mb-2">Enthalpy Values</h4>
                      <div class="text-xs space-y-1">
                        <div class="flex justify-between">
                          <span class="text-gray-500">Trip:</span>
                          <span class="font-medium text-yellow-600">3180 kJ/kg</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-500">FW Inlet:</span>
                          <span class="font-medium text-yellow-600">932 kJ/kg</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-500">FW Outlet:</span>
                          <span class="font-medium text-yellow-600">1010 kJ/kg</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-500">Extraction:</span>
                          <span class="font-medium text-yellow-600">3050 kJ/kg</span>
                        </div>
                      </div>
                    </div>
                    
                    <div class="temperature-pressure">
                      <h4 class="text-sm font-medium text-gray-600 mb-2">Temperature & Pressure</h4>
                      <div class="text-xs space-y-1">
                        <div class="flex justify-between">
                          <span class="text-gray-500">FW Inlet:</span>
                          <span class="font-medium text-yellow-600">178.3 °C</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-500">FW Outlet:</span>
                          <span class="font-medium text-yellow-600">198.6 °C</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-500">Ext Temp:</span>
                          <span class="font-medium text-yellow-600">318.5 °C</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-500">Ext Press:</span>
                          <span class="font-medium text-yellow-600">25.8 bar</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- HP Heater 3 -->
                <div class="heater-card">
                  <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-semibold">HP Heater 3</h3>
                    <div class="level-indicator bg-red-100 text-red-800 px-2 py-1 text-xs rounded">
                      Level: 78%
                    </div>
                  </div>
                  
                  <div class="grid grid-cols-3 gap-4 mb-4">
                    <div class="parameter-box">
                      <div class="flex items-center">
                        <div class="parameter-icon text-red-500">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 22V8h-4V4H8v4H4v14h16z" />
                            <path d="M6 18h12" />
                            <path d="M6 14h12" />
                            <path d="M6 10h12" />
                          </svg>
                        </div>
                        <div class="ml-1">
                          <div class="text-xs text-gray-500">Heat Load</div>
                          <div class="flex items-center">
                            <span class="font-semibold">45.1</span>
                            <span class="text-xs ml-1">MW</span>
                            <span class="ml-1 text-xs text-red-500">↑ 4.8%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="parameter-box">
                      <div class="flex items-center">
                        <div class="parameter-icon text-red-500">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 2v6a2 2 0 0 0 2 2h6" />
                            <path d="M12 8a2 2 0 0 1-2-2V2" />
                            <path d="M20 2v6a2 2 0 0 1-2 2" />
                            <path d="M18 14v7" />
                            <path d="M18 17h-5" />
                            <path d="M7 9H2" />
                            <path d="M12 12H2" />
                            <path d="M7 15H2" />
                          </svg>
                        </div>
                        <div class="ml-1">
                          <div class="text-xs text-gray-500">Flow</div>
                          <div class="flex items-center">
                            <span class="font-semibold">612</span>
                            <span class="text-xs ml-1">t/h</span>
                            <span class="ml-1 text-xs text-red-500">↑ 1.5%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="parameter-box">
                      <div class="flex items-center">
                        <div class="parameter-icon text-green-500">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M14 4l-5 5 5 5" />
                            <path d="M9 9h11" />
                            <path d="M10 20l5-5-5-5" />
                            <path d="M15 15H4" />
                          </svg>
                        </div>
                        <div class="ml-1">
                          <div class="text-xs text-gray-500">TTD</div>
                          <div class="flex items-center">
                            <span class="font-semibold">4.2</span>
                            <span class="text-xs ml-1">°C</span>
                            <span class="ml-1 text-xs text-green-500">↑ 2.1%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="grid grid-cols-2 gap-4 mb-4">
                    <div class="parameter-box">
                      <div class="flex items-center">
                        <div class="parameter-icon text-red-500">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 9.5V21m0-11.5L6 3m6 6.5L18 3" />
                          </svg>
                        </div>
                        <div class="ml-1">
                          <div class="text-xs text-gray-500">DCA</div>
                          <div class="flex items-center">
                            <span class="font-semibold">6.8</span>
                            <span class="text-xs ml-1">°C</span>
                            <span class="ml-1 text-xs text-green-500">↑ 2.2%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="parameter-box">
                      <div class="flex items-center">
                        <div class="parameter-icon text-red-500">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 19H6c-1.7 0-3-1.3-3-3V8c0-1.7 1.3-3 3-3h12c1.7 0 3 1.3 3 3v8c0 1.7-1.3 3-3 3z" />
                            <path d="M16 8v8" />
                            <path d="M12 8v8" />
                            <path d="M8 8v8" />
                          </svg>
                        </div>
                        <div class="ml-1">
                          <div class="text-xs text-gray-500">TR</div>
                          <div class="flex items-center">
                            <span class="font-semibold">0.83</span>
                            <span class="ml-1 text-xs text-red-500">↓ 0.05%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="grid grid-cols-2 gap-4">
                    <div class="enthalpy-values">
                      <h4 class="text-sm font-medium text-gray-600 mb-2">Enthalpy Values</h4>
                      <div class="text-xs space-y-1">
                        <div class="flex justify-between">
                          <span class="text-gray-500">Trip:</span>
                          <span class="font-medium text-red-600">3020 kJ/kg</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-500">FW Inlet:</span>
                          <span class="font-medium text-red-600">875 kJ/kg</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-500">FW Outlet:</span>
                          <span class="font-medium text-red-600">956 kJ/kg</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-500">Extraction:</span>
                          <span class="font-medium text-red-600">2980 kJ/kg</span>
                        </div>
                      </div>
                    </div>
                    
                    <div class="temperature-pressure">
                      <h4 class="text-sm font-medium text-gray-600 mb-2">Temperature & Pressure</h4>
                      <div class="text-xs space-y-1">
                        <div class="flex justify-between">
                          <span class="text-gray-500">FW Inlet:</span>
                          <span class="font-medium text-red-600">162.4 °C</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-500">FW Outlet:</span>
                          <span class="font-medium text-red-600">185.1 °C</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-500">Ext Temp:</span>
                          <span class="font-medium text-red-600">302.6 °C</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-500">Ext Press:</span>
                          <span class="font-medium text-red-600">18.5 bar</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Trend Charts -->
              <div class="mb-6">
                <div class="bg-white p-4 rounded-lg shadow-md">
                  <div class="flex border-b mb-4">
                    <button class="tab active" data-tab="parameters-tab">Parameters</button>
                    <button class="tab" data-tab="levels-tab">Levels</button>
                    <button class="tab" data-tab="enthalpy-tab">Enthalpy</button>
                  </div>
                  
                  <h2 class="text-xl font-bold text-gray-700 mb-4">Heater Parameter Trends</h2>
                  
                  <div id="parameters-tab" class="tab-content active">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div class="chart-container">
                        <h3 class="text-lg font-medium text-gray-600 mb-2">Heat Load Trend (MW)</h3>
                        <canvas id="heat-load-chart" height="250"></canvas>
                      </div>
                      <div class="chart-container">
                        <h3 class="text-lg font-medium text-gray-600 mb-2">Temperature Trend (°C)</h3>
                        <canvas id="temperature-chart" height="250"></canvas>
                      </div>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                      <div class="chart-container">
                        <h3 class="text-lg font-medium text-gray-600 mb-2">TTD Trend (°C)</h3>
                        <canvas id="ttd-chart" height="200"></canvas>
                      </div>
                      <div class="chart-container">
                        <h3 class="text-lg font-medium text-gray-600 mb-2">DCA Trend (°C)</h3>
                        <canvas id="dca-chart" height="200"></canvas>
                      </div>
                      <div class="chart-container">
                        <h3 class="text-lg font-medium text-gray-600 mb-2">TR Trend</h3>
                        <canvas id="tr-chart" height="200"></canvas>
                      </div>
                    </div>
                  </div>
                  
                  <div id="levels-tab" class="tab-content hidden">
                    <div class="chart-container">
                      <h3 class="text-lg font-medium text-gray-600 mb-2">Heater Level Trend (%)</h3>
                      <canvas id="heater-level-chart" height="300"></canvas>
                    </div>
                  </div>
                  
                  <div id="enthalpy-tab" class="tab-content hidden">
                    <div class="chart-container">
                      <h3 class="text-lg font-medium text-gray-600 mb-2">Enthalpy Trend (kJ/kg)</h3>
                      <canvas id="enthalpy-chart" height="300"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `}} />
        </div>
      </div>
    </div>
  );
};

export default Index;
