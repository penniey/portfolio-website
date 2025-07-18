import React from 'react';

export const formatDescription = (description: string): React.ReactNode => {
  const lines = description.split('\n');
  const elements: React.ReactNode[] = [];
  let currentIndex = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Handle headers
    if (line.startsWith('## ')) {
      const headerText = line.replace('## ', '');
      elements.push(
        <h3 key={`header-${currentIndex++}`} className="section-header">
          {headerText}
        </h3>
      );
    }
    // Handle bullet points - collect consecutive bullet points into a list
    else if (line.startsWith('- ')) {
      const bulletPoints: string[] = [];
      let j = i;
      
      // Collect all consecutive bullet points
      while (j < lines.length && lines[j].trim().startsWith('- ')) {
        bulletPoints.push(lines[j].trim().replace('- ', ''));
        j++;
      }
      
      elements.push(
        <ul key={`list-${currentIndex++}`} className="feature-list">
          {bulletPoints.map((point, pointIndex) => (
            <li key={pointIndex}>{point}</li>
          ))}
        </ul>
      );
      
      // Skip the processed lines
      i = j - 1;
    }
    // Handle regular text - collect consecutive non-empty lines into paragraphs
    else if (line && !line.startsWith('## ') && !line.startsWith('- ')) {
      const paragraphLines: string[] = [];
      let j = i;
      
      // Collect consecutive text lines
      while (j < lines.length) {
        const currentLine = lines[j].trim();
        if (!currentLine) {
          j++;
          break; // Empty line ends the paragraph
        }
        if (currentLine.startsWith('## ') || currentLine.startsWith('- ')) {
          break; // Header or bullet point ends the paragraph
        }
        paragraphLines.push(currentLine);
        j++;
      }
      
      if (paragraphLines.length > 0) {
        elements.push(
          <p key={`para-${currentIndex++}`}>
            {paragraphLines.map((paraLine, lineIndex) => (
              <React.Fragment key={lineIndex}>
                {paraLine}
                {lineIndex < paragraphLines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        );
      }
      
      // Skip the processed lines
      i = j - 1;
    }
    // Skip empty lines
  }

  return elements;
};
