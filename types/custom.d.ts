// declare global {
//     interface Window {
//         googleTranslateElementInit: () => void;
//     }
// }


// interface Window {
//     googleTranslateElementInit: () => void;
// }

// declare global {
//     namespace google {
//         namespace translate {
//             interface TranslateElementOptions {
//                 pageLanguage?: string;
//                 autoDisplay?: boolean;
//                 includedLanguages?: string;
//                 layout?: number;
//                 // Add other properties if needed
//             }

//             class TranslateElement {
//                 constructor(
//                     options: TranslateElementOptions,
//                     targetId: string
//                 );
//             }
//         }
//     }
// }