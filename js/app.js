const addclickbtn = () => {
    const getTableContainer = document.getElementById('table-container');
    const createTableBody = document.createElement('tbody');
    createTableBody.innerHTML = `
    <tr
                            class="bg-white border-b hover:bg-gray-50 ">

                            <td class="px-6 py-4 font-semibold text-gray-900">
                                Course 1
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center">

                                    <div>
                                        <input type="text" id="first_product"
                                            class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 "
                                            placeholder="A+" required style='text-transform:uppercase'>
                                    </div>

                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center">

                                    <div>
                                        <input type="number" id="first_product"
                                            class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 "
                                            placeholder="1" required>
                                    </div>

                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center">

                                    <div>
                                        <input type="number" id="first_product"
                                            class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 "
                                            placeholder="1" required>
                                    </div>

                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <h1 class="font-bold ">0</h1>
                            </td>
                            <td class="px-6 py-4">
                                <button onclick="addclickbtn()" type="button"
                                    class="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20"
                                        viewBox="0 0 48 48">
                                        <path fill="#4caf50"
                                            d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z">
                                        </path>
                                        <path fill="#fff" d="M21,14h6v20h-6V14z "></path>
                                        <path fill="#fff" d="M14,21h20v6H14V21z "></path>
                                    </svg>
                                    Add Course
                                </button>
                            </td>
                        </tr>
    
    `;
    getTableContainer.appendChild(createTableBody);



}

const gradeCreditSum=()=>{
    const getGradePoint=document.getElementById('grade-point').value;
    const GradePontConvert=parseFloat(getGradePoint);
    const getCreditPoint=document.getElementById('credit-point').value;
    const CrediPointConvert=parseFloat(getCreditPoint);
    const sum=GradePontConvert*CrediPointConvert;
    console.log(sum);
}
