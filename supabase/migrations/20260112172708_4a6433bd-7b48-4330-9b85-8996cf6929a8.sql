-- Add restrictive policies to prevent UPDATE and DELETE on contact_submissions
CREATE POLICY "No public updates" 
ON public.contact_submissions 
FOR UPDATE 
USING (false);

CREATE POLICY "No public deletes" 
ON public.contact_submissions 
FOR DELETE 
USING (false);