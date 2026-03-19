import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// Initialize admin if not already initialized
if (admin.apps.length === 0) {
    admin.initializeApp();
}

export const onAssetCreated = functions.firestore
    .document('inspections/{inspectionId}/assets/{assetId}')
    .onCreate(async (snap, context) => {
        const data = snap.data();
        const { inspectionId, assetId } = context.params;

        // Only process live captures to avoid infinite loops or reprocessing uploads
        if (data.captureMode !== 'live_capture') return;

        console.log(`Analyzing asset ${assetId} for inspection ${inspectionId}`);

        // SIMULATION: Calling LARI-Vision Genkit Flow
        // This is a mock implementation for the UTCB requirement.
        // Replace with actual Genkit flow call: e.g. await lariVisionFlow.run(data.imageUrl);
        
        // Simulating processing delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        const findings = [
             {
                label: "Surface Anomaly",
                description: "AI analysis detected an irregularity on the surface that warrants further inspection.",
                confidence: 0.89,
                severity: "MEDIUM",
                createdAt: admin.firestore.FieldValue.serverTimestamp(),
                sourceAssetId: assetId,
                engine: "LARI-VISION-CLOUD-V1"
            },
            {
                label: "Material Degradation",
                description: "Signs of potential weathering or material fatigue observed.",
                confidence: 0.72,
                severity: "LOW",
                createdAt: admin.firestore.FieldValue.serverTimestamp(),
                sourceAssetId: assetId,
                engine: "LARI-VISION-CLOUD-V1"
            }
        ];

        const batch = admin.firestore().batch();
        findings.forEach(finding => {
            const ref = admin.firestore().collection(`inspections/${inspectionId}/findings`).doc();
            batch.set(ref, finding);
        });

        await batch.commit();
        console.log(`Created ${findings.length} findings for asset ${assetId}.`);
    });
