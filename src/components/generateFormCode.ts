export const generateFormCode = (fields: any): string => {
    const fieldElements = Object.values(fields).map((field: any) => {
      const { type, label = '', name = '', placeholder = '', options = '' } = field;
      const optionList = typeof options === 'string' 
        ? options.split(',').map((o: string) => o.trim()).filter(Boolean)
        : [];
  
      switch (type) {
        case 'text':
        case 'number':
        case 'password':
          return `      <div>
          <label htmlFor="${name}">${label}</label>
          <input type="${type}" id="${name}" name="${name}" ${placeholder ? `placeholder="${placeholder}" ` : ''}/>
        </div>`;
        case 'textarea':
          return `      <div>
          <label htmlFor="${name}">${label}</label>
          <textarea id="${name}" name="${name}" ${placeholder ? `placeholder="${placeholder}" ` : ''}/>
        </div>`;
        case 'select':
          return `      <div>
          <label htmlFor="${name}">${label}</label>
          <select id="${name}" name="${name}">
  ${optionList.length > 0 ? optionList.map((opt: string) => `          <option value="${opt}">${opt}</option>`).join('\n') : `          <option value="option1">Option 1</option>`}
          </select>
        </div>`;
        case 'radio':
          return `      <div>
          <p>${label}</p>
  ${optionList.length > 0 ? optionList.map((opt: string) => `        <label>
            <input type="radio" name="${name}" value="${opt}" />
            ${opt}
          </label>`).join('\n') : `        <label>
            <input type="radio" name="${name}" value="option1" />
            Option 1
          </label>`}
        </div>`;
        case 'checkbox':
          if (optionList.length > 0) {
            return `      <div>
          <p>${label}</p>
  ${optionList.map((opt: string) => `        <label>
            <input type="checkbox" name="${name}" value="${opt}" />
            ${opt}
          </label>`).join('\n')}
        </div>`;
          }
          return `      <div>
          <label>
            <input type="checkbox" id="${name}" name="${name}" />
            ${label}
          </label>
        </div>`;
        case 'submit':
          return `      <button type="submit">${label || 'Submit'}</button>`;
        default:
          return '';
      }
    }).filter(Boolean).join('\n\n');
  
    return `import React from 'react';
  
  export default function GeneratedForm() {
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  
    return (
      <form onSubmit={handleSubmit}>
  ${fieldElements}
      </form>
    );
  }
  `;
  };
  