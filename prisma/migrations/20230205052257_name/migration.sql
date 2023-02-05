-- AlterTable
CREATE SEQUENCE gender_genderid_seq;
ALTER TABLE "Gender" ALTER COLUMN "genderId" SET DEFAULT nextval('gender_genderid_seq');
ALTER SEQUENCE gender_genderid_seq OWNED BY "Gender"."genderId";
