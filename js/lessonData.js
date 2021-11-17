export const lessonData = {

  steps: [

    {id: 2, text: 'System intializing...', target: 4, type: 'load'},
    {id: 4, text: 'Enter username to begin:', target: 10, type: 'input'},
    {id: 10, text: 'Hello username, welcome to NS-DOS 7.5.', target: 20, type: 'normal'},
    {id: 20, text: 'This application will let you configure the system modules.', target: 40, type: 'normal'},
    {id: 40, text: 'Select the system to configure:', targets: [
      {text: 'Multi-Spectral Phase Inverter', target: 50},
      {text: 'Secondary Warp Plasma Manifold', target: 60},
      {text: 'Forward Iso-Linear Interlock 2.', target: 70}
    ], type: 'option'},
    {id: 50, text: 'Loading Multi-Spectral Phase Inverter to local memory...', target: 80, type: 'load'},
    {id: 60, text: 'Loading Secondary Warp Plasma Manifold system to local memory...', target: 80, type: 'load'},
    {id: 70, text: 'Loading Forward Iso-Linear Interlock 2 system to local memory...', target: 80, type: 'load'},
    {id: 80, text: 'Loading complete.', target: 90, type: 'normal'},
    {id: 90, text: 'Now choose an option to configure:', targets: [
      {text: 'Reconfigure plasma stream', target: 100},
      {text: 'Quantize matrix shield modulator', target: 110},
      {text: 'Recompile spectral matrix processor', target: 120}
    ], type: 'option'},
    {id: 100, text: 'Reconfiguring plasma stream...', target: 130, type: 'load'},
    {id: 110, text: 'Quantizing matrix shield modulator...', target: 140, type: 'load'},
    {id: 120, text: 'Recompiling spectral matrix processor...', target: 150, type: 'load'},
    {id: 130, text: 'Plasma stream has been reconfigured.', target: 160, type: 'normal'},
    {id: 140, text: 'Matrix shield modulator has completed quantization.', target: 160, type: 'normal'},
    {id: 150, text: 'Spectral Matrix Processor has completed recompiling.', target: 160, type: 'normal'},
    {id: 160, text: 'You have succesfully configured the system.', target: 170, type: 'normal'},
    {id: 170, text: 'The system will now begin shutdown.', target: 180, type: 'normal'},
    {id: 180, text: 'System is shutting down...', target: 190, type: 'load'},
    {id: 190, text: '', target: 0, type: 'end'},
  ]

}
