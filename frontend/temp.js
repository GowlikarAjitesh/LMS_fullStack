
        <div className="mt-4 space-y-4">
          {courseCurriculumFormData.map((courseCuriculum, index) => (
            <div className="border p-5 rounded-md" key={index + 1}>
              
                  <VideoPlayer url={courseCuriculum.videoUrl} width="450px" height="200px"/>
              <div className="flex gap-5 items-center">
                <h3 className="font-semibold">Lecture {index + 1}</h3>
                <Input
                  name={`title ${index + 1}`}
                  placeholder="Enter Lecture title"
                  className="max-w-96"
                  value={courseCuriculum.title || ""}
                  onChange={(event) => handleInputChange(event, index)}
                />
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={courseCuriculum.freePreview ?? false}
                    onCheckedChange={(value) =>
                      handleToggleFreePreview(value, index)
                    }
                    id={`freePreview-${index}`}
                  />
                  <Label htmlFor={`freePreview-${index}`}>Free Preview</Label>
                </div>
              </div>
              <div className="mt-6">
                {console.log(courseCuriculum.videoUrl)}
              {
                
                
                courseCuriculum.videoUrl ? (<div className="flex gap-3 items-center">
                  {/* <VideoPlayer url={courseCuriculum.videoUrl} width="450px" height="200px"/> */}
                  <video width="450" height="200" controls>
  <source src={courseCuriculum.videoUrl} type="video/mp4" />
</video>

                  {/* <video controls width="600">
  <source src="https://res.cloudinary.com/dleany69n/video/upload/q_auto,f_auto/v1770988374/pxxufqsz76zphmazb5a1.mp4" type="video/mp4"/>
</video> */}
                  <Button> Replace</Button>
                  <Button className="bg-red-700"> <Trash2/> Delete</Button>
                </div>) : (<div className="flex gap-3 items-center">
                <Input
                  type="file"
                  accept="video/*"
                  onChange={(event) => handleVideoUploadChange(event, index)}
                />
              </div>)
              }
              </div>
            </div>
          ))}
        </div>